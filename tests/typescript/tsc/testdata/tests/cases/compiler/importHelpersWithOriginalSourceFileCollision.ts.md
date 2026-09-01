__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ClassDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 33
                },
                "typeArguments": null,
                "start": 19,
                "end": 33
              },
              "start": 17,
              "end": 33
            },
            "start": 14,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 33
        }
      ],
      "declare": true,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "start": 49,
            "end": 62
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 62
        }
      ],
      "declare": true,
      "start": 35,
      "end": 63
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "template",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 79
          },
          "init": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 82,
                "end": 85
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 90,
                "end": 92
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 90
              }
            ],
            "start": 82,
            "end": 92
          },
          "definite": false,
          "start": 71,
          "end": 92
        }
      ],
      "declare": false,
      "start": 65,
      "end": 93
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "__decorate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 120,
                "end": 127
              },
              "start": 118,
              "end": 127
            },
            "start": 108,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 108,
          "end": 127
        }
      ],
      "declare": true,
      "start": 94,
      "end": 128
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [
          {
            "type": "Decorator",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 134
            },
            "start": 130,
            "end": 134
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 149
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 150,
          "end": 152
        },
        "abstract": false,
        "declare": false,
        "start": 142,
        "end": 152
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 135,
      "end": 152
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 153
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "ClassDecorator",
    "start": 19,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 43,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "template",
    "start": 71,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 80,
    "end": 81
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 85,
    "end": 90
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 90,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 94,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "__decorate",
    "start": 108,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 131,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 135,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__decorate",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 34
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "decorators",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 55
                  },
                  "typeArguments": null,
                  "start": 47,
                  "end": 55
                },
                "start": 47,
                "end": 57
              },
              "start": 45,
              "end": 57
            },
            "start": 35,
            "end": 57
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 75
                },
                "typeArguments": null,
                "start": 67,
                "end": 75
              },
              "start": 65,
              "end": 75
            },
            "start": 59,
            "end": 75
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 78,
            "end": 82
          },
          "start": 76,
          "end": 82
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 83
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "__decorate",
    "start": 24,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 35,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 47,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  }
]
```
