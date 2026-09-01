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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 18,
                    "end": 27
                  },
                  {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 32,
                          "end": 33
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 35,
                            "end": 41
                          },
                          "start": 33,
                          "end": 41
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 32,
                        "end": 41
                      }
                    ],
                    "start": 30,
                    "end": 43
                  }
                ],
                "start": 18,
                "end": 43
              },
              "start": 16,
              "end": 43
            },
            "start": 14,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 43
        }
      ],
      "declare": true,
      "start": 0,
      "end": 44
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 47
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "optional": true,
          "computed": false,
          "start": 45,
          "end": 50
        },
        "start": 45,
        "end": 50
      },
      "directive": null,
      "start": 45,
      "end": 51
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
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 71,
                    "end": 80
                  },
                  {
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 86
                        },
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
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 90,
                                  "end": 91
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 93,
                                    "end": 99
                                  },
                                  "start": 91,
                                  "end": 99
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 90,
                                "end": 99
                              }
                            ],
                            "start": 88,
                            "end": 101
                          },
                          "start": 86,
                          "end": 101
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 85,
                        "end": 101
                      }
                    ],
                    "start": 83,
                    "end": 103
                  }
                ],
                "start": 71,
                "end": 103
              },
              "start": 69,
              "end": 103
            },
            "start": 67,
            "end": 103
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 103
        }
      ],
      "declare": true,
      "start": 53,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o2",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 107
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 110
            },
            "optional": true,
            "computed": false,
            "start": 105,
            "end": 110
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 112
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 112
        },
        "start": 105,
        "end": 112
      },
      "directive": null,
      "start": 105,
      "end": 113
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
            "name": "o3",
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
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 136
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 138,
                            "end": 147
                          },
                          {
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
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 152,
                                  "end": 153
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 155,
                                    "end": 161
                                  },
                                  "start": 153,
                                  "end": 161
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 152,
                                "end": 161
                              }
                            ],
                            "start": 150,
                            "end": 163
                          }
                        ],
                        "start": 138,
                        "end": 163
                      },
                      "start": 136,
                      "end": 163
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 135,
                    "end": 163
                  }
                ],
                "start": 133,
                "end": 165
              },
              "start": 131,
              "end": 165
            },
            "start": 129,
            "end": 165
          },
          "init": null,
          "definite": false,
          "start": 129,
          "end": 165
        }
      ],
      "declare": true,
      "start": 115,
      "end": 166
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o3",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 169
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 170,
              "end": 171
            },
            "optional": false,
            "computed": false,
            "start": 167,
            "end": 171
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "optional": true,
          "computed": false,
          "start": 167,
          "end": 174
        },
        "start": 167,
        "end": 174
      },
      "directive": null,
      "start": 167,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 175
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 18,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
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
    "value": "o1",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 47,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 53,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 71,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 107,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 115,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 129,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
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
    "value": "b",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
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
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 155,
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
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "o3",
    "start": 167,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 171,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  }
]
```
