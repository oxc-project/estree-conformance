__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 16
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 23,
              "end": 34
            },
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 39,
              "end": 50
            },
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 55,
              "end": 66
            },
            {
              "type": "AccessorProperty",
              "decorators": [],
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 81,
                "end": 82
              },
              "typeAnnotation": null,
              "value": null,
              "computed": false,
              "static": false,
              "override": false,
              "definite": false,
              "accessibility": null,
              "declare": false,
              "optional": false,
              "readonly": false,
              "start": 72,
              "end": 83
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
                "start": 89,
                "end": 100
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
                    "name": "seed",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 107,
                        "end": 113
                      },
                      "start": 105,
                      "end": 113
                    },
                    "start": 101,
                    "end": 113
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 125,
                            "end": 129
                          },
                          "property": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "'x'",
                            "start": 130,
                            "end": 133
                          },
                          "optional": false,
                          "computed": true,
                          "start": 125,
                          "end": 134
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 138,
                              "end": 142
                            }
                          ],
                          "start": 137,
                          "end": 143
                        },
                        "start": 125,
                        "end": 143
                      },
                      "directive": null,
                      "start": 125,
                      "end": 144
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 153,
                            "end": 157
                          },
                          "property": {
                            "type": "Literal",
                            "value": "y",
                            "raw": "'y'",
                            "start": 158,
                            "end": 161
                          },
                          "optional": false,
                          "computed": true,
                          "start": 153,
                          "end": 162
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
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 167,
                                "end": 171
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "seed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 167,
                                "end": 171
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 167,
                              "end": 171
                            }
                          ],
                          "start": 165,
                          "end": 173
                        },
                        "start": 153,
                        "end": 173
                      },
                      "directive": null,
                      "start": 153,
                      "end": 174
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 183,
                            "end": 187
                          },
                          "property": {
                            "type": "Literal",
                            "value": "z",
                            "raw": "'z'",
                            "start": 188,
                            "end": 191
                          },
                          "optional": false,
                          "computed": true,
                          "start": 183,
                          "end": 192
                        },
                        "right": {
                          "type": "TemplateLiteral",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": false,
                              "start": 195,
                              "end": 198
                            },
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
                          "expressions": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 198,
                              "end": 202
                            }
                          ],
                          "start": 195,
                          "end": 204
                        },
                        "start": 183,
                        "end": 204
                      },
                      "directive": null,
                      "start": 183,
                      "end": 205
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 215,
                            "end": 219
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 220,
                            "end": 221
                          },
                          "optional": false,
                          "computed": true,
                          "start": 215,
                          "end": 222
                        },
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "seed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 226,
                              "end": 230
                            }
                          ],
                          "start": 225,
                          "end": 231
                        },
                        "start": 215,
                        "end": 231
                      },
                      "directive": null,
                      "start": 215,
                      "end": 232
                    }
                  ],
                  "start": 115,
                  "end": 238
                },
                "expression": false,
                "start": 100,
                "end": 238
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 89,
              "end": 238
            }
          ],
          "start": 17,
          "end": 240
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 240
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Cls",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 39,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 55,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "accessor",
    "start": 72,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 89,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "seed",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 129,
    "end": 130
  },
  {
    "type": "String",
    "value": "'x'",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "[",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "seed",
    "start": 138,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "this",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "'y'",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "seed",
    "start": 167,
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
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "String",
    "value": "'z'",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 195,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "seed",
    "start": 198,
    "end": 202
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "seed",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  }
]
```
