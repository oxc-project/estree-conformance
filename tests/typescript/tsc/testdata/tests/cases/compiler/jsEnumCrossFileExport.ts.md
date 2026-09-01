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
            "name": "Host",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 11,
            "end": 13
          },
          "definite": false,
          "start": 4,
          "end": 13
        }
      ],
      "declare": false,
      "start": 0,
      "end": 14
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
            "name": "Host",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 19
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "UserMetrics",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 31
          },
          "optional": false,
          "computed": false,
          "start": 15,
          "end": 31
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 34,
          "end": 36
        },
        "start": 15,
        "end": 36
      },
      "directive": null,
      "start": 15,
      "end": 37
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Host",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 64
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "UserMetrics",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 76
            },
            "optional": false,
            "computed": false,
            "start": 60,
            "end": 76
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Action",
            "optional": false,
            "typeAnnotation": null,
            "start": 77,
            "end": 83
          },
          "optional": false,
          "computed": false,
          "start": 60,
          "end": 83
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "WindowDocked",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 104
              },
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 106,
                "end": 107
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 92,
              "end": 107
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "WindowUndocked",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 127
              },
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 129,
                "end": 130
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 113,
              "end": 130
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ScriptsBreakpointSet",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 156
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 158,
                "end": 159
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 136,
              "end": 159
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "TimelineStarted",
                "optional": false,
                "typeAnnotation": null,
                "start": 165,
                "end": 180
              },
              "value": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 182,
                "end": 183
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 165,
              "end": 183
            }
          ],
          "start": 86,
          "end": 186
        },
        "start": 60,
        "end": 186
      },
      "directive": null,
      "start": 60,
      "end": 187
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Host",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 273
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "UserMetrics",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 285
            },
            "optional": false,
            "computed": false,
            "start": 269,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Blah",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 290
          },
          "optional": false,
          "computed": false,
          "start": 269,
          "end": 290
        },
        "right": {
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
                "start": 299,
                "end": 300
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 302,
                "end": 304
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 299,
              "end": 304
            }
          ],
          "start": 293,
          "end": 306
        },
        "start": 269,
        "end": 306
      },
      "directive": null,
      "start": 269,
      "end": 306
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 306
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
    "value": "Host",
    "start": 4,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Host",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "UserMetrics",
    "start": 20,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "Host",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "UserMetrics",
    "start": 65,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "WindowDocked",
    "start": 92,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "WindowUndocked",
    "start": 113,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "ScriptsBreakpointSet",
    "start": 136,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "TimelineStarted",
    "start": 165,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Host",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "UserMetrics",
    "start": 274,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Blah",
    "start": 286,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 300,
    "end": 301
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 302,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  }
]
```
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
            "name": "Other",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 4,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
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
            "name": "Other",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cls",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 16,
          "end": 25
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 105
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 109,
                    "end": 111
                  },
                  "expression": false,
                  "start": 105,
                  "end": 111
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 99,
                "end": 111
              },
              {
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "usage",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 121
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 134,
                              "end": 138
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 139,
                              "end": 145
                            },
                            "optional": false,
                            "computed": false,
                            "start": 134,
                            "end": 145
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Host",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 146,
                                    "end": 150
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "UserMetrics",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 151,
                                    "end": 162
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 146,
                                  "end": 162
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Action",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 163,
                                  "end": 169
                                },
                                "optional": false,
                                "computed": false,
                                "start": 146,
                                "end": 169
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "WindowDocked",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 170,
                                "end": 182
                              },
                              "optional": false,
                              "computed": false,
                              "start": 146,
                              "end": 182
                            }
                          ],
                          "optional": false,
                          "start": 134,
                          "end": 183
                        },
                        "directive": null,
                        "start": 134,
                        "end": 184
                      }
                    ],
                    "start": 124,
                    "end": 190
                  },
                  "expression": false,
                  "start": 121,
                  "end": 190
                },
                "kind": "method",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 116,
                "end": 190
              }
            ],
            "start": 34,
            "end": 192
          },
          "abstract": false,
          "declare": false,
          "start": 28,
          "end": 192
        },
        "start": 16,
        "end": 192
      },
      "directive": null,
      "start": 16,
      "end": 192
    },
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
            "start": 240,
            "end": 241
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 244,
            "end": 248
          },
          "definite": false,
          "start": 240,
          "end": 248
        }
      ],
      "declare": false,
      "start": 236,
      "end": 249
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 297
          },
          "init": {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 300,
            "end": 304
          },
          "definite": false,
          "start": 296,
          "end": 304
        }
      ],
      "declare": false,
      "start": 292,
      "end": 305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 305
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
    "value": "Other",
    "start": 4,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "usage",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "Host",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "UserMetrics",
    "start": 151,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 163,
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
    "value": "WindowDocked",
    "start": 170,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 236,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 298,
    "end": 299
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 300,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  }
]
```
