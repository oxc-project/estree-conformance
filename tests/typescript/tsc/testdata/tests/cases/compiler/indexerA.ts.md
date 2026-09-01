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
        "name": "JQueryElement",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 19
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
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              },
              "start": 28,
              "end": 35
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 26,
            "end": 36
          }
        ],
        "start": 20,
        "end": 38
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 52
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  },
                  "start": 61,
                  "end": 68
                },
                "start": 60,
                "end": 68
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQueryElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 83
                },
                "typeArguments": null,
                "start": 70,
                "end": 83
              },
              "start": 69,
              "end": 83
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 59,
            "end": 83
          }
        ],
        "start": 53,
        "end": 85
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 85
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
            "name": "jq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 100
                },
                "typeArguments": null,
                "start": 94,
                "end": 100
              },
              "start": 93,
              "end": 100
            },
            "start": 91,
            "end": 100
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 103,
                  "end": 104
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 110
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 113,
                        "end": 116
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 108,
                      "end": 116
                    }
                  ],
                  "start": 106,
                  "end": 118
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 103,
                "end": 118
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 120,
                  "end": 121
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 127
                      },
                      "value": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 130,
                        "end": 133
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 125,
                      "end": 133
                    }
                  ],
                  "start": 123,
                  "end": 135
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 120,
                "end": 135
              }
            ],
            "start": 101,
            "end": 137
          },
          "definite": false,
          "start": 91,
          "end": 137
        }
      ],
      "declare": false,
      "start": 87,
      "end": 138
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "jq",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 141
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 142,
            "end": 143
          },
          "optional": false,
          "computed": true,
          "start": 139,
          "end": 144
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 147
        },
        "optional": false,
        "computed": false,
        "start": 139,
        "end": 147
      },
      "directive": null,
      "start": 139,
      "end": 148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 148
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
    "value": "JQueryElement",
    "start": 6,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "JQuery",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "JQueryElement",
    "start": 70,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "jq",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "JQuery",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 118,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "jq",
    "start": 139,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  }
]
```
