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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 33
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 39
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 54
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 63,
                    "end": 69
                  }
                ],
                "start": 54,
                "end": 70
              },
              "start": 48,
              "end": 70
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 70
          }
        ],
        "start": 33,
        "end": 71
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "shape",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Shape",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 84
              },
              "typeArguments": null,
              "start": 79,
              "end": 84
            },
            "start": 77,
            "end": 84
          },
          "start": 72,
          "end": 84
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 102
                },
                "typeArguments": null,
                "start": 97,
                "end": 102
              },
              "start": 91,
              "end": 102
            },
            "start": 89,
            "end": 102
          },
          "start": 86,
          "end": 102
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 119
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 122,
                    "end": 124
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 134
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Shape",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 141,
                                  "end": 146
                                },
                                "typeArguments": null,
                                "start": 141,
                                "end": 146
                              },
                              "start": 135,
                              "end": 146
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "knownLiteralKey",
                                "raw": "\"knownLiteralKey\"",
                                "start": 149,
                                "end": 166
                              },
                              "start": 149,
                              "end": 166
                            }
                          ],
                          "start": 135,
                          "end": 166
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 168,
                          "end": 174
                        }
                      ],
                      "start": 134,
                      "end": 175
                    },
                    "start": 128,
                    "end": 175
                  },
                  "start": 122,
                  "end": 175
                },
                "definite": false,
                "start": 116,
                "end": 175
              }
            ],
            "declare": false,
            "start": 110,
            "end": 176
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 185
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "knownLiteralKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 201
                },
                "optional": false,
                "computed": false,
                "start": 182,
                "end": 201
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 204,
                "end": 205
              },
              "start": 182,
              "end": 205
            },
            "directive": null,
            "start": 182,
            "end": 206
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 214
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 218
                },
                "optional": false,
                "computed": true,
                "start": 211,
                "end": 219
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 222,
                "end": 223
              },
              "start": 211,
              "end": 223
            },
            "directive": null,
            "start": 211,
            "end": 224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unknownLiteralKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 234,
                  "end": 251
                },
                "optional": false,
                "computed": false,
                "start": 230,
                "end": 251
              },
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 254,
                "end": 255
              },
              "start": 230,
              "end": 255
            },
            "directive": null,
            "start": 230,
            "end": 256
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 273
                },
                "property": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 274,
                    "end": 276
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 280,
                    "end": 286
                  },
                  "start": 274,
                  "end": 286
                },
                "optional": false,
                "computed": true,
                "start": 270,
                "end": 287
              },
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 290,
                "end": 291
              },
              "start": 270,
              "end": 291
            },
            "directive": null,
            "start": 270,
            "end": 292
          }
        ],
        "start": 104,
        "end": 303
      },
      "expression": false,
      "start": 20,
      "end": 303
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 303
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 20,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 34,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 40,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "shape",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 110,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 125,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 135,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 147,
    "end": 148
  },
  {
    "type": "String",
    "value": "\"knownLiteralKey\"",
    "start": 149,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "knownLiteralKey",
    "start": 186,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Identifier",
    "value": "obj",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 215,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "unknownLiteralKey",
    "start": 234,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 270,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 273,
    "end": 274
  },
  {
    "type": "String",
    "value": "''",
    "start": 274,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  }
]
```
