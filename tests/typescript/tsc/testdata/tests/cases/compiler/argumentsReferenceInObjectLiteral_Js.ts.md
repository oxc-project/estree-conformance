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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 39,
                          "end": 48
                        },
                        "value": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 50,
                          "end": 52
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 39,
                        "end": 52
                      }
                    ],
                    "start": 29,
                    "end": 59
                  },
                  "start": 22,
                  "end": 60
                }
              ],
              "start": 16,
              "end": 62
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 62
          },
          "definite": false,
          "start": 6,
          "end": 62
        }
      ],
      "declare": false,
      "start": 0,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 72
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
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
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arguments",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 107,
                              "end": 116
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 118,
                              "end": 120
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 107,
                            "end": 120
                          }
                        ],
                        "start": 97,
                        "end": 127
                      },
                      "definite": false,
                      "start": 93,
                      "end": 127
                    }
                  ],
                  "declare": false,
                  "start": 87,
                  "end": 127
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 140
                  },
                  "start": 132,
                  "end": 141
                }
              ],
              "start": 81,
              "end": 143
            },
            "id": null,
            "generator": false,
            "start": 75,
            "end": 143
          },
          "definite": false,
          "start": 71,
          "end": 143
        }
      ],
      "declare": false,
      "start": 65,
      "end": 144
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 152,
            "end": 153
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 194
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 194
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 185,
                        "end": 194
                      }
                    ],
                    "start": 175,
                    "end": 201
                  },
                  "start": 168,
                  "end": 202
                }
              ],
              "start": 162,
              "end": 204
            },
            "id": null,
            "generator": false,
            "start": 156,
            "end": 204
          },
          "definite": false,
          "start": 152,
          "end": 204
        }
      ],
      "declare": false,
      "start": 146,
      "end": 204
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 213
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
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
                        "name": "arguments",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 243
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 255
                      },
                      "definite": false,
                      "start": 234,
                      "end": 255
                    }
                  ],
                  "declare": false,
                  "start": 228,
                  "end": 256
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 278,
                          "end": 287
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 278,
                          "end": 287
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 278,
                        "end": 287
                      }
                    ],
                    "start": 268,
                    "end": 294
                  },
                  "start": 261,
                  "end": 295
                }
              ],
              "start": 222,
              "end": 297
            },
            "id": null,
            "generator": false,
            "start": 216,
            "end": 297
          },
          "definite": false,
          "start": 212,
          "end": 297
        }
      ],
      "declare": false,
      "start": 206,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
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
    "value": "b",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 78,
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
    "value": "const",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 107,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 132,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 185,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 206,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 228,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 234,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 246,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 278,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  }
]
```
