__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 4,
        "end": 8
      },
      "consequent": {
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 21
                },
                "init": null,
                "definite": false,
                "start": 20,
                "end": 21
              }
            ],
            "declare": false,
            "start": 16,
            "end": 22
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 31,
              "end": 35
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 51,
                        "end": 52
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 55,
                        "end": 56
                      },
                      "definite": false,
                      "start": 51,
                      "end": 56
                    }
                  ],
                  "declare": false,
                  "start": 47,
                  "end": 57
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 81,
                              "end": 82
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 81,
                                "end": 82
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 85,
                                "end": 86
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 81,
                              "end": 86
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 81,
                            "end": 86
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 88
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 93,
                              "end": 94
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 96,
                              "end": 97
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 93,
                            "end": 97
                          }
                        ],
                        "start": 91,
                        "end": 99
                      },
                      "definite": false,
                      "start": 79,
                      "end": 99
                    }
                  ],
                  "declare": false,
                  "start": 75,
                  "end": 100
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 124,
                              "end": 125
                            },
                            "value": {
                              "type": "AssignmentPattern",
                              "decorators": [],
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 127,
                                "end": 128
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 131,
                                "end": 132
                              },
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 127,
                              "end": 132
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 124,
                            "end": 132
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 134
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 139,
                              "end": 140
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 142,
                              "end": 143
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 139,
                            "end": 143
                          }
                        ],
                        "start": 137,
                        "end": 145
                      },
                      "definite": false,
                      "start": 122,
                      "end": 145
                    }
                  ],
                  "declare": false,
                  "start": 118,
                  "end": 146
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 170,
                              "end": 171
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 170,
                              "end": 171
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 170,
                            "end": 171
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 173
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 178,
                              "end": 179
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 181,
                              "end": 182
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 178,
                            "end": 182
                          }
                        ],
                        "start": 176,
                        "end": 184
                      },
                      "definite": false,
                      "start": 168,
                      "end": 184
                    }
                  ],
                  "declare": false,
                  "start": 164,
                  "end": 185
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 210
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 212,
                              "end": 213
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 209,
                            "end": 213
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 215
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 220,
                              "end": 221
                            },
                            "value": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 223,
                              "end": 224
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 220,
                            "end": 224
                          }
                        ],
                        "start": 218,
                        "end": 226
                      },
                      "definite": false,
                      "start": 207,
                      "end": 226
                    }
                  ],
                  "declare": false,
                  "start": 203,
                  "end": 227
                }
              ],
              "start": 37,
              "end": 242
            },
            "alternate": null,
            "start": 27,
            "end": 242
          }
        ],
        "start": 10,
        "end": 244
      },
      "alternate": null,
      "start": 0,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 244
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 16,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  }
]
```
