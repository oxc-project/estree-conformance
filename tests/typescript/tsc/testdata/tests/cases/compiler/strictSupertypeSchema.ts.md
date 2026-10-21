__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 30,
                    "end": 36
                  },
                  "start": 28,
                  "end": 36
                },
                "start": 24,
                "end": 36
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 39,
                "end": 42
              },
              "start": 37,
              "end": 42
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 23,
            "end": 43
          }
        ],
        "start": 17,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "choose",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 70
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 77
          }
        ],
        "start": 70,
        "end": 78
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "callbacks",
            "optional": false,
            "typeAnnotation": null,
            "start": 82,
            "end": 91
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 100,
                    "end": 106
                  },
                  "start": 97,
                  "end": 106
                },
                "start": 94,
                "end": 106
              },
              "start": 93,
              "end": 109
            },
            "start": 91,
            "end": 109
          },
          "value": null,
          "start": 79,
          "end": 109
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 118
          },
          "typeArguments": null,
          "start": 112,
          "end": 118
        },
        "start": 110,
        "end": 118
      },
      "body": null,
      "expression": false,
      "start": 47,
      "end": 119
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
            "name": "schema",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 148
                },
                "typeArguments": null,
                "start": 142,
                "end": 148
              },
              "start": 140,
              "end": 148
            },
            "start": 134,
            "end": 148
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 148
        }
      ],
      "declare": true,
      "start": 120,
      "end": 149
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 163
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "choose",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 172
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 180,
                  "end": 182
                },
                "id": null,
                "generator": false,
                "start": 173,
                "end": 183
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "schema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 197
                },
                "id": null,
                "generator": false,
                "start": 185,
                "end": 197
              }
            ],
            "optional": false,
            "start": 166,
            "end": 198
          },
          "definite": false,
          "start": 157,
          "end": 198
        }
      ],
      "declare": false,
      "start": 151,
      "end": 199
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 206
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "$ref",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 211
        },
        "optional": false,
        "computed": false,
        "start": 200,
        "end": 211
      },
      "directive": null,
      "start": 200,
      "end": 212
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 212
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 24,
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
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 47,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "choose",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "callbacks",
    "start": 82,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 120,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "choose",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 176,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 188,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "schema",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "$ref",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  }
]
```
