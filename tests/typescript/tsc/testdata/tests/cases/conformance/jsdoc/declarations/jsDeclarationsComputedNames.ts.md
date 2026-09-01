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
            "name": "TopLevelSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 26
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 20,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
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
            "name": "InnerSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 44
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 47,
            "end": 55
          },
          "definite": false,
          "start": 36,
          "end": 55
        }
      ],
      "declare": false,
      "start": 30,
      "end": 56
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 71
          },
          "optional": false,
          "computed": false,
          "start": 57,
          "end": 71
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
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 92
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 95
                    },
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 98,
                      "end": 100
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 100
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 120
                      },
                      "start": 112,
                      "end": 121
                    }
                  ],
                  "start": 102,
                  "end": 127
                },
                "expression": false,
                "start": 93,
                "end": 127
              },
              "method": true,
              "shorthand": false,
              "computed": true,
              "optional": false,
              "start": 80,
              "end": 127
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "items",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 138
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 159
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 166
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
                                  "start": 170,
                                  "end": 171
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 12,
                                  "raw": "12",
                                  "start": 173,
                                  "end": 175
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 170,
                                "end": 175
                              }
                            ],
                            "start": 169,
                            "end": 176
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 176
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 184
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 185,
                          "end": 186
                        },
                        "optional": false,
                        "computed": false,
                        "start": 181,
                        "end": 186
                      },
                      "id": null,
                      "generator": false,
                      "start": 162,
                      "end": 186
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 150,
                    "end": 186
                  }
                ],
                "start": 140,
                "end": 192
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 133,
              "end": 192
            }
          ],
          "start": 74,
          "end": 194
        },
        "start": 57,
        "end": 194
      },
      "directive": null,
      "start": 57,
      "end": 194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 195
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
    "value": "TopLevelSym",
    "start": 6,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "InnerSym",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 64,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "TopLevelSym",
    "start": 81,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 98,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 112,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "InnerSym",
    "start": 151,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 173,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 178,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "TopLevelSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 26
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 20,
            "end": 28
          },
          "definite": false,
          "start": 6,
          "end": 28
        }
      ],
      "declare": false,
      "start": 0,
      "end": 29
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
            "name": "InnerSym",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 44
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 47,
            "end": 55
          },
          "definite": false,
          "start": 36,
          "end": 55
        }
      ],
      "declare": false,
      "start": 30,
      "end": 56
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 78
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "TopLevelSym",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 104
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 108,
                "end": 110
              },
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 85,
              "end": 111
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "InnerSym",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 125
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 129,
                "end": 133
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 116,
              "end": 134
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 222
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
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 225
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InnerSym",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 228,
                      "end": 236
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 236
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 238,
                  "end": 269
                },
                "expression": false,
                "start": 222,
                "end": 269
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 211,
              "end": 269
            }
          ],
          "start": 79,
          "end": 271
        },
        "abstract": false,
        "declare": false,
        "start": 65,
        "end": 271
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 58,
      "end": 271
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 271
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
    "value": "TopLevelSym",
    "start": 6,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "InnerSym",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 58,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "TopLevelSym",
    "start": 93,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "InnerSym",
    "start": 117,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 211,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "_p",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "InnerSym",
    "start": 228,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  }
]
```
