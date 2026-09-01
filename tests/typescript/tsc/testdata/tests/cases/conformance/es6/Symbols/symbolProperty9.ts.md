__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 15,
                "end": 21
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 30
              },
              "optional": false,
              "computed": false,
              "start": 15,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 36
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 35,
                    "end": 37
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 39
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 38,
                    "end": 39
                  }
                ],
                "start": 33,
                "end": 41
              },
              "start": 31,
              "end": 41
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 42
          }
        ],
        "start": 8,
        "end": 44
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 70
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 79
              },
              "optional": false,
              "computed": false,
              "start": 64,
              "end": 79
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 85
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 84,
                    "end": 85
                  }
                ],
                "start": 82,
                "end": 87
              },
              "start": 80,
              "end": 87
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 88
          }
        ],
        "start": 57,
        "end": 90
      },
      "declare": false,
      "start": 45,
      "end": 90
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "start": 97,
              "end": 100
            },
            "start": 96,
            "end": 100
          },
          "init": null,
          "definite": false,
          "start": 96,
          "end": 100
        }
      ],
      "declare": false,
      "start": 92,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 103
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 111
          },
          "typeArguments": null,
          "arguments": [],
          "start": 106,
          "end": 111
        },
        "start": 102,
        "end": 111
      },
      "directive": null,
      "start": 102,
      "end": 112
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "typeArguments": null,
                "start": 120,
                "end": 121
              },
              "start": 118,
              "end": 121
            },
            "start": 117,
            "end": 121
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 125
          },
          "definite": false,
          "start": 117,
          "end": 125
        }
      ],
      "declare": false,
      "start": 113,
      "end": 126
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 126
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 22,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 71,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 106,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 117,
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
    "value": "C",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  }
]
```
