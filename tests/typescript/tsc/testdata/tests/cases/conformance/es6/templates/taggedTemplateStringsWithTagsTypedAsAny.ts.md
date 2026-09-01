__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              },
              "start": 5,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true,
              "start": 15,
              "end": 20
            }
          ],
          "expressions": [],
          "start": 15,
          "end": 20
        },
        "start": 13,
        "end": 20
      },
      "directive": null,
      "start": 13,
      "end": 20
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 22,
          "end": 23
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 24,
              "end": 30
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 31,
              "end": 37
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 38,
              "end": 43
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 30,
              "end": 31
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 37,
              "end": 38
            }
          ],
          "start": 24,
          "end": 43
        },
        "start": 22,
        "end": 43
      },
      "directive": null,
      "start": 22,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "optional": false,
          "computed": false,
          "start": 46,
          "end": 51
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": true,
              "start": 52,
              "end": 57
            }
          ],
          "expressions": [],
          "start": 52,
          "end": 57
        },
        "start": 46,
        "end": 57
      },
      "directive": null,
      "start": 46,
      "end": 57
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 62
            },
            "optional": false,
            "computed": false,
            "start": 59,
            "end": 62
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "optional": false,
          "computed": false,
          "start": 59,
          "end": 64
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 65,
              "end": 71
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 72,
              "end": 78
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 79,
              "end": 84
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 71,
              "end": 72
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 78,
              "end": 79
            }
          ],
          "start": 65,
          "end": 84
        },
        "start": 59,
        "end": 84
      },
      "directive": null,
      "start": 59,
      "end": 85
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 88
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 89,
                "end": 94
              }
            ],
            "expressions": [],
            "start": 89,
            "end": 94
          },
          "start": 87,
          "end": 94
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 101
        },
        "optional": false,
        "computed": false,
        "start": 87,
        "end": 101
      },
      "directive": null,
      "start": 87,
      "end": 101
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 103,
            "end": 104
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 105,
                "end": 111
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 112,
                "end": 118
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 119,
                "end": 124
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 111,
                "end": 112
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 118,
                "end": 119
              }
            ],
            "start": 105,
            "end": 124
          },
          "start": 103,
          "end": 124
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 131
        },
        "optional": false,
        "computed": false,
        "start": 103,
        "end": 131
      },
      "directive": null,
      "start": 103,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 135
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 136,
                "end": 141
              }
            ],
            "expressions": [],
            "start": 136,
            "end": 141
          },
          "start": 134,
          "end": 141
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 142,
          "end": 150
        },
        "optional": false,
        "computed": true,
        "start": 134,
        "end": 151
      },
      "directive": null,
      "start": 134,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "TaggedTemplateExpression",
          "tag": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "typeArguments": null,
          "quasi": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 156,
                "end": 162
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 163,
                "end": 169
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 170,
                "end": 175
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 162,
                "end": 163
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 169,
                "end": 170
              }
            ],
            "start": 156,
            "end": 175
          },
          "start": 154,
          "end": 175
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 176,
          "end": 184
        },
        "optional": false,
        "computed": true,
        "start": 154,
        "end": 185
      },
      "directive": null,
      "start": 154,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 189
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true,
                    "start": 190,
                    "end": 195
                  }
                ],
                "expressions": [],
                "start": 190,
                "end": 195
              },
              "start": 188,
              "end": 195
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 196,
              "end": 204
            },
            "optional": false,
            "computed": true,
            "start": 188,
            "end": 205
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 188,
          "end": 218
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 219,
              "end": 225
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 226,
              "end": 232
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 233,
              "end": 238
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 225,
              "end": 226
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 232,
              "end": 233
            }
          ],
          "start": 219,
          "end": 238
        },
        "start": 188,
        "end": 238
      },
      "directive": null,
      "start": 188,
      "end": 239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 242
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false,
                    "start": 243,
                    "end": 249
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 250,
                    "end": 256
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true,
                    "start": 257,
                    "end": 262
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 249,
                    "end": 250
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 256,
                    "end": 257
                  }
                ],
                "start": 243,
                "end": 262
              },
              "start": 241,
              "end": 262
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 263,
              "end": 271
            },
            "optional": false,
            "computed": true,
            "start": 241,
            "end": 272
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 285
          },
          "optional": false,
          "computed": false,
          "start": 241,
          "end": 285
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "abc",
                "cooked": "abc"
              },
              "tail": false,
              "start": 286,
              "end": 292
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 293,
              "end": 299
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 300,
              "end": 305
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 292,
              "end": 293
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 299,
              "end": 300
            }
          ],
          "start": 286,
          "end": 305
        },
        "start": 241,
        "end": 305
      },
      "directive": null,
      "start": 241,
      "end": 306
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 310,
            "end": 323
          },
          "optional": false,
          "computed": false,
          "start": 308,
          "end": 323
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": true,
                "start": 324,
                "end": 329
              }
            ],
            "expressions": [],
            "start": 324,
            "end": 329
          }
        ],
        "optional": false,
        "start": 308,
        "end": 330
      },
      "directive": null,
      "start": 308,
      "end": 331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 333,
            "end": 334
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 348
          },
          "optional": false,
          "computed": false,
          "start": 333,
          "end": 348
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 349,
                "end": 355
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 356,
                "end": 362
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 363,
                "end": 368
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 355,
                "end": 356
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 362,
                "end": 363
              }
            ],
            "start": 349,
            "end": 368
          }
        ],
        "optional": false,
        "start": 333,
        "end": 369
      },
      "directive": null,
      "start": 333,
      "end": 370
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 370
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 13,
    "end": 14
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 22,
    "end": 23
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 24,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 30,
    "end": 31
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 31,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 37,
    "end": 38
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 50,
    "end": 51
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 63,
    "end": 64
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 65,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 71,
    "end": 72
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 72,
    "end": 78
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 78,
    "end": 79
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 87,
    "end": 88
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 89,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 95,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 103,
    "end": 104
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 105,
    "end": 111
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 111,
    "end": 112
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 112,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 118,
    "end": 119
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 119,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 134,
    "end": 135
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 136,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 142,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 154,
    "end": 155
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 156,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 162,
    "end": 163
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 163,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 169,
    "end": 170
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 188,
    "end": 189
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 190,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 196,
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
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "someOtherTag",
    "start": 206,
    "end": 218
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 219,
    "end": 225
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 225,
    "end": 226
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 226,
    "end": 232
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 232,
    "end": 233
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 241,
    "end": 242
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 243,
    "end": 249
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 249,
    "end": 250
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 250,
    "end": 256
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 256,
    "end": 257
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 262,
    "end": 263
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 263,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "someOtherTag",
    "start": 273,
    "end": 285
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 286,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 292,
    "end": 293
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 293,
    "end": 299
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 299,
    "end": 300
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 310,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 323,
    "end": 324
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 324,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 335,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 349,
    "end": 355
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 355,
    "end": 356
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 356,
    "end": 362
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 362,
    "end": 363
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 363,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  }
]
```
