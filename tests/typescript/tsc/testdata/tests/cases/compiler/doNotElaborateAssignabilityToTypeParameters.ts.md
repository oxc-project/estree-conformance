__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 25,
                "end": 26
              },
              "typeArguments": null,
              "start": 25,
              "end": 26
            },
            "start": 23,
            "end": 26
          },
          "start": 22,
          "end": 26
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 36
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              }
            ],
            "start": 36,
            "end": 39
          },
          "start": 29,
          "end": 39
        },
        "start": 27,
        "end": 39
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "yaddable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 56
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getXOrYadda",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 76
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      }
                    ],
                    "optional": false,
                    "start": 65,
                    "end": 79
                  },
                  "start": 59,
                  "end": 79
                },
                "definite": false,
                "start": 48,
                "end": 79
              }
            ],
            "declare": false,
            "start": 44,
            "end": 80
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "yaddable",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 98
            },
            "start": 83,
            "end": 99
          }
        ],
        "start": 40,
        "end": 101
      },
      "expression": false,
      "start": 0,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Yadda",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 118
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "stuff",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "accessibility": null,
            "static": false,
            "start": 123,
            "end": 137
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "things",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 148,
                "end": 154
              },
              "start": 146,
              "end": 154
            },
            "accessibility": null,
            "static": false,
            "start": 140,
            "end": 155
          }
        ],
        "start": 119,
        "end": 157
      },
      "declare": false,
      "start": 103,
      "end": 157
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getXOrYadda",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 187
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 188,
            "end": 189
          }
        ],
        "start": 187,
        "end": 190
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "typeArguments": null,
              "start": 194,
              "end": 195
            },
            "start": 192,
            "end": 195
          },
          "start": 191,
          "end": 195
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 199
              },
              "typeArguments": null,
              "start": 198,
              "end": 199
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Yadda",
                "optional": false,
                "typeAnnotation": null,
                "start": 202,
                "end": 207
              },
              "typeArguments": null,
              "start": 202,
              "end": 207
            }
          ],
          "start": 198,
          "end": 207
        },
        "start": 196,
        "end": 207
      },
      "body": null,
      "expression": false,
      "start": 159,
      "end": 208
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 208
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 44,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "yaddable",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "getXOrYadda",
    "start": 65,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 83,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "yaddable",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 103,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Yadda",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "stuff",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 130,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "things",
    "start": 140,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 148,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 159,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 167,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "getXOrYadda",
    "start": 176,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Yadda",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  }
]
```
