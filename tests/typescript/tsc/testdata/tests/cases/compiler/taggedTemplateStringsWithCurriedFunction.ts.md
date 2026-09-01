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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 43,
                  "end": 47
                }
              ],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 52,
                "end": 54
              },
              "id": null,
              "generator": false,
              "start": 42,
              "end": 54
            },
            "id": null,
            "generator": false,
            "start": 37,
            "end": 54
          },
          "definite": false,
          "start": 33,
          "end": 54
        }
      ],
      "declare": false,
      "start": 27,
      "end": 55
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
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
                          "start": 66,
                          "end": 67
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 69,
                          "end": 70
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 66,
                        "end": 70
                      }
                    ],
                    "start": 64,
                    "end": 72
                  },
                  "start": 61,
                  "end": 72
                }
              ],
              "start": 59,
              "end": 74
            }
          ],
          "optional": false,
          "start": 57,
          "end": 75
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 75,
              "end": 77
            }
          ],
          "expressions": [],
          "start": 75,
          "end": 77
        },
        "start": 57,
        "end": 77
      },
      "directive": null,
      "start": 57,
      "end": 78
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
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
                          "start": 88,
                          "end": 89
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 91,
                          "end": 92
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 88,
                        "end": 92
                      }
                    ],
                    "start": 86,
                    "end": 94
                  },
                  "start": 83,
                  "end": 94
                }
              ],
              "start": 81,
              "end": 96
            }
          ],
          "optional": false,
          "start": 79,
          "end": 97
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "x",
                "cooked": "x"
              },
              "tail": true,
              "start": 97,
              "end": 100
            }
          ],
          "expressions": [],
          "start": 97,
          "end": 100
        },
        "start": 79,
        "end": 100
      },
      "directive": null,
      "start": 79,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 102,
            "end": 103
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
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
                          "start": 111,
                          "end": 112
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 114,
                          "end": 115
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 111,
                        "end": 115
                      }
                    ],
                    "start": 109,
                    "end": 117
                  },
                  "start": 106,
                  "end": 117
                }
              ],
              "start": 104,
              "end": 119
            }
          ],
          "optional": false,
          "start": 102,
          "end": 120
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "x",
                "cooked": "x"
              },
              "tail": false,
              "start": 120,
              "end": 124
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "x",
                "cooked": "x"
              },
              "tail": true,
              "start": 125,
              "end": 128
            }
          ],
          "expressions": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            }
          ],
          "start": 120,
          "end": 128
        },
        "start": 102,
        "end": 128
      },
      "directive": null,
      "start": 102,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 131
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
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
                  "start": 134,
                  "end": 145
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 157,
                        "end": 158
                      },
                      "id": null,
                      "generator": false,
                      "start": 151,
                      "end": 158
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 150,
                    "end": 161
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 147,
                  "end": 161
                }
              ],
              "start": 132,
              "end": 163
            }
          ],
          "optional": false,
          "start": 130,
          "end": 164
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 164,
              "end": 166
            }
          ],
          "expressions": [],
          "start": 164,
          "end": 166
        },
        "start": 130,
        "end": 166
      },
      "directive": null,
      "start": 130,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "typeArguments": null,
          "arguments": [
            {
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
                    "start": 172,
                    "end": 173
                  },
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 182,
                        "end": 183
                      },
                      "id": null,
                      "generator": false,
                      "start": 176,
                      "end": 183
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 175,
                    "end": 186
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 172,
                  "end": 186
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 194
                        },
                        "value": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 196,
                          "end": 197
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 193,
                        "end": 197
                      }
                    ],
                    "start": 191,
                    "end": 199
                  },
                  "start": 188,
                  "end": 199
                }
              ],
              "start": 170,
              "end": 201
            }
          ],
          "optional": false,
          "start": 168,
          "end": 202
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 202,
              "end": 204
            }
          ],
          "expressions": [],
          "start": 202,
          "end": 204
        },
        "start": 168,
        "end": 204
      },
      "directive": null,
      "start": 168,
      "end": 205
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 27,
  "end": 205
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Template",
    "value": "``",
    "start": 75,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Template",
    "value": "`x`",
    "start": 97,
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
    "value": "f",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Template",
    "value": "`x${",
    "start": 120,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 124,
    "end": 125
  },
  {
    "type": "Template",
    "value": "}x`",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 134,
    "end": 137
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
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 154,
    "end": 156
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Template",
    "value": "``",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 179,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Template",
    "value": "``",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  }
]
```
