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
          "start": 12,
          "end": 13
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
              "start": 14,
              "end": 19
            }
          ],
          "expressions": [],
          "start": 14,
          "end": 19
        },
        "start": 12,
        "end": 19
      },
      "directive": null,
      "start": 12,
      "end": 19
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
          "start": 21,
          "end": 22
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
              "start": 23,
              "end": 29
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 30,
              "end": 36
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 37,
              "end": 42
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 29,
              "end": 30
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 36,
              "end": 37
            }
          ],
          "start": 23,
          "end": 42
        },
        "start": 21,
        "end": 42
      },
      "directive": null,
      "start": 21,
      "end": 43
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
              "start": 45,
              "end": 46
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "optional": false,
            "computed": false,
            "start": 45,
            "end": 48
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "optional": false,
          "computed": false,
          "start": 45,
          "end": 50
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
              "start": 51,
              "end": 56
            }
          ],
          "expressions": [],
          "start": 51,
          "end": 56
        },
        "start": 45,
        "end": 56
      },
      "directive": null,
      "start": 45,
      "end": 56
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
              "start": 58,
              "end": 59
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "optional": false,
            "computed": false,
            "start": 58,
            "end": 61
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "optional": false,
          "computed": false,
          "start": 58,
          "end": 63
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
              "start": 64,
              "end": 70
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 71,
              "end": 77
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 78,
              "end": 83
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 70,
              "end": 71
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 77,
              "end": 78
            }
          ],
          "start": 64,
          "end": 83
        },
        "start": 58,
        "end": 83
      },
      "directive": null,
      "start": 58,
      "end": 84
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
            "start": 86,
            "end": 87
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
                "start": 88,
                "end": 93
              }
            ],
            "expressions": [],
            "start": 88,
            "end": 93
          },
          "start": 86,
          "end": 93
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 100
        },
        "optional": false,
        "computed": false,
        "start": 86,
        "end": 100
      },
      "directive": null,
      "start": 86,
      "end": 100
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
            "start": 102,
            "end": 103
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
                "start": 104,
                "end": 110
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 111,
                "end": 117
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 118,
                "end": 123
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 110,
                "end": 111
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 117,
                "end": 118
              }
            ],
            "start": 104,
            "end": 123
          },
          "start": 102,
          "end": 123
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "member",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 130
        },
        "optional": false,
        "computed": false,
        "start": 102,
        "end": 130
      },
      "directive": null,
      "start": 102,
      "end": 131
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
            "start": 133,
            "end": 134
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
                "start": 135,
                "end": 140
              }
            ],
            "expressions": [],
            "start": 135,
            "end": 140
          },
          "start": 133,
          "end": 140
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 141,
          "end": 149
        },
        "optional": false,
        "computed": true,
        "start": 133,
        "end": 150
      },
      "directive": null,
      "start": 133,
      "end": 151
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
            "start": 153,
            "end": 154
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
                "start": 155,
                "end": 161
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 162,
                "end": 168
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 169,
                "end": 174
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 161,
                "end": 162
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 168,
                "end": 169
              }
            ],
            "start": 155,
            "end": 174
          },
          "start": 153,
          "end": 174
        },
        "property": {
          "type": "Literal",
          "value": "member",
          "raw": "\"member\"",
          "start": 175,
          "end": 183
        },
        "optional": false,
        "computed": true,
        "start": 153,
        "end": 184
      },
      "directive": null,
      "start": 153,
      "end": 185
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
                "start": 187,
                "end": 188
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
                    "start": 189,
                    "end": 194
                  }
                ],
                "expressions": [],
                "start": 189,
                "end": 194
              },
              "start": 187,
              "end": 194
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 195,
              "end": 203
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 204
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 205,
            "end": 217
          },
          "optional": false,
          "computed": false,
          "start": 187,
          "end": 217
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
              "start": 218,
              "end": 224
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 225,
              "end": 231
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 232,
              "end": 237
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 224,
              "end": 225
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 231,
              "end": 232
            }
          ],
          "start": 218,
          "end": 237
        },
        "start": 187,
        "end": 237
      },
      "directive": null,
      "start": 187,
      "end": 238
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
                "start": 240,
                "end": 241
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
                    "start": 242,
                    "end": 248
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": false,
                    "start": 249,
                    "end": 255
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "ghi",
                      "cooked": "ghi"
                    },
                    "tail": true,
                    "start": 256,
                    "end": 261
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 248,
                    "end": 249
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 255,
                    "end": 256
                  }
                ],
                "start": 242,
                "end": 261
              },
              "start": 240,
              "end": 261
            },
            "property": {
              "type": "Literal",
              "value": "member",
              "raw": "\"member\"",
              "start": 262,
              "end": 270
            },
            "optional": false,
            "computed": true,
            "start": 240,
            "end": 271
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someOtherTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 240,
          "end": 284
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
              "start": 285,
              "end": 291
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "def",
                "cooked": "def"
              },
              "tail": false,
              "start": 292,
              "end": 298
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "ghi",
                "cooked": "ghi"
              },
              "tail": true,
              "start": 299,
              "end": 304
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 291,
              "end": 292
            },
            {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 298,
              "end": 299
            }
          ],
          "start": 285,
          "end": 304
        },
        "start": 240,
        "end": 304
      },
      "directive": null,
      "start": 240,
      "end": 305
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
            "start": 307,
            "end": 308
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 322
          },
          "optional": false,
          "computed": false,
          "start": 307,
          "end": 322
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
                "start": 323,
                "end": 328
              }
            ],
            "expressions": [],
            "start": 323,
            "end": 328
          }
        ],
        "optional": false,
        "start": 307,
        "end": 329
      },
      "directive": null,
      "start": 307,
      "end": 330
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
            "start": 332,
            "end": 333
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thisIsNotATag",
            "optional": false,
            "typeAnnotation": null,
            "start": 334,
            "end": 347
          },
          "optional": false,
          "computed": false,
          "start": 332,
          "end": 347
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
                "start": 348,
                "end": 354
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": false,
                "start": 355,
                "end": 361
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "ghi",
                  "cooked": "ghi"
                },
                "tail": true,
                "start": 362,
                "end": 367
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 354,
                "end": 355
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 361,
                "end": 362
              }
            ],
            "start": 348,
            "end": 367
          }
        ],
        "optional": false,
        "start": 332,
        "end": 368
      },
      "directive": null,
      "start": 332,
      "end": 369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 369
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
    "start": 12,
    "end": 13
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 14,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 21,
    "end": 22
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 23,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 30,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 36,
    "end": 37
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 49,
    "end": 50
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 62,
    "end": 63
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 64,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 70,
    "end": 71
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 71,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 77,
    "end": 78
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 78,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 86,
    "end": 87
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 94,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 102,
    "end": 103
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 104,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 110,
    "end": 111
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 111,
    "end": 117
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 117,
    "end": 118
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "member",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 133,
    "end": 134
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 153,
    "end": 154
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 155,
    "end": 161
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 161,
    "end": 162
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 162,
    "end": 168
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 168,
    "end": 169
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 175,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "f",
    "start": 187,
    "end": 188
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 189,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 195,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "someOtherTag",
    "start": 205,
    "end": 217
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 218,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 224,
    "end": 225
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 225,
    "end": 231
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 231,
    "end": 232
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 232,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 240,
    "end": 241
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 242,
    "end": 248
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 248,
    "end": 249
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 249,
    "end": 255
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 255,
    "end": 256
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"member\"",
    "start": 262,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "someOtherTag",
    "start": 272,
    "end": 284
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 285,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 291,
    "end": 292
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 292,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 298,
    "end": 299
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 309,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Template",
    "value": "`abc`",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "thisIsNotATag",
    "start": 334,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 348,
    "end": 354
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 354,
    "end": 355
  },
  {
    "type": "Template",
    "value": "}def${",
    "start": 355,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 361,
    "end": 362
  },
  {
    "type": "Template",
    "value": "}ghi`",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  }
]
```
