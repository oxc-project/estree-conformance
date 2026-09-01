__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 9,
              "end": 12
            },
            "start": 9,
            "end": 12
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 15,
              "end": 18
            },
            "start": 15,
            "end": 18
          }
        ],
        "start": 9,
        "end": 18
      },
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
        "end": 26
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "typeArguments": null,
              "start": 29,
              "end": 30
            },
            "start": 29,
            "end": 32
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 36
            },
            "typeArguments": null,
            "start": 35,
            "end": 36
          }
        ],
        "start": 29,
        "end": 36
      },
      "declare": false,
      "start": 20,
      "end": 37
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 49
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
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
                "start": 55,
                "end": 56
              },
              "typeArguments": null,
              "start": 55,
              "end": 56
            },
            "start": 53,
            "end": 56
          },
          "start": 50,
          "end": 56
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 71
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 76,
                "end": 79
              },
              "start": 68,
              "end": 79
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 101
                  },
                  "start": 91,
                  "end": 102
                }
              ],
              "start": 81,
              "end": 108
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 122,
                  "end": 125
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 130,
                  "end": 133
                },
                "start": 122,
                "end": 133
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 155
                    },
                    "start": 145,
                    "end": 156
                  }
                ],
                "start": 135,
                "end": 162
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 194
                        },
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 198,
                              "end": 199
                            },
                            "typeArguments": null,
                            "start": 198,
                            "end": 199
                          },
                          "start": 198,
                          "end": 201
                        },
                        "start": 191,
                        "end": 201
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 203,
                        "end": 204
                      },
                      "optional": false,
                      "computed": true,
                      "start": 190,
                      "end": 205
                    },
                    "start": 183,
                    "end": 206
                  }
                ],
                "start": 172,
                "end": 212
              },
              "start": 118,
              "end": 212
            },
            "start": 64,
            "end": 212
          }
        ],
        "start": 58,
        "end": 214
      },
      "expression": false,
      "start": 39,
      "end": 214
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 214
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 5,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 13,
    "end": 14
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 20,
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
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "S",
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
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 72,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 91,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 113,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 122,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 126,
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
    "value": ")",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 145,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 195,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  }
]
```
