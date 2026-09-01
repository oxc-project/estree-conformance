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
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12,
                      "end": 15
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      },
                      "start": 15,
                      "end": 23
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 12,
                    "end": 24
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 25,
                      "end": 28
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 30,
                        "end": 39
                      },
                      "start": 28,
                      "end": 39
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 25,
                    "end": 39
                  }
                ],
                "start": 10,
                "end": 41
              },
              "start": 8,
              "end": 41
            },
            "start": 6,
            "end": 41
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 49
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 51,
                  "end": 52
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 46,
                "end": 52
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 67
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 72,
                                "end": 78
                              },
                              "start": 70,
                              "end": 78
                            },
                            "start": 68,
                            "end": 78
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 80,
                          "end": 83
                        },
                        "expression": false,
                        "start": 67,
                        "end": 83
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 60,
                      "end": 83
                    }
                  ],
                  "start": 58,
                  "end": 85
                },
                "start": 54,
                "end": 85
              }
            ],
            "start": 44,
            "end": 87
          },
          "definite": false,
          "start": 6,
          "end": 87
        }
      ],
      "declare": false,
      "start": 0,
      "end": 87
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 103
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUndefinedKeyword",
                        "start": 105,
                        "end": 114
                      },
                      "start": 103,
                      "end": 114
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 100,
                    "end": 114
                  }
                ],
                "start": 98,
                "end": 116
              },
              "start": 96,
              "end": 116
            },
            "start": 94,
            "end": 116
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 124
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 126,
                  "end": 127
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 121,
                "end": 127
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "set",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 139,
                        "end": 142
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_v",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 147,
                                "end": 153
                              },
                              "start": 145,
                              "end": 153
                            },
                            "start": 143,
                            "end": 153
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 155,
                          "end": 158
                        },
                        "expression": false,
                        "start": 142,
                        "end": 158
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 135,
                      "end": 158
                    }
                  ],
                  "start": 133,
                  "end": 160
                },
                "start": 129,
                "end": 160
              }
            ],
            "start": 119,
            "end": 162
          },
          "definite": false,
          "start": 94,
          "end": 162
        }
      ],
      "declare": false,
      "start": 88,
      "end": 162
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 162
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
    "value": "o1",
    "start": 6,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "foo",
    "start": 12,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 25,
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
    "value": "undefined",
    "start": 30,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "...",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 60,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "_v",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 72,
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
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 105,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
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
    "value": "foo",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 129,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 135,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "_v",
    "start": 143,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  }
]
```
