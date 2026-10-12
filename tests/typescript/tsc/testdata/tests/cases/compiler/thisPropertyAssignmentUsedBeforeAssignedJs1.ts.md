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
          "name": "BaseProduct",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 24
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
                "name": "Price",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 34
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 37,
                "end": 38
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 29,
              "end": 39
            }
          ],
          "start": 25,
          "end": 41
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 41
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Product",
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 63
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseProduct",
          "optional": false,
          "typeAnnotation": null,
          "start": 72,
          "end": 83
        },
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
                "name": "Compute",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 95
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 104,
                            "end": 108
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Price",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 114
                          },
                          "optional": false,
                          "computed": false,
                          "start": 104,
                          "end": 114
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Number",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 117,
                            "end": 123
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 124,
                                "end": 128
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Price",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 129,
                                "end": 134
                              },
                              "optional": false,
                              "computed": false,
                              "start": 124,
                              "end": 134
                            }
                          ],
                          "optional": false,
                          "start": 117,
                          "end": 135
                        },
                        "start": 104,
                        "end": 135
                      },
                      "directive": null,
                      "start": 104,
                      "end": 136
                    }
                  ],
                  "start": 98,
                  "end": 140
                },
                "expression": false,
                "start": 95,
                "end": 140
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 88,
              "end": 140
            }
          ],
          "start": 84,
          "end": 142
        },
        "abstract": false,
        "declare": false,
        "start": 50,
        "end": 142
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 43,
      "end": 142
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Annotated",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 166
        },
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
                "name": "Compute",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 178
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 213,
                            "end": 217
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Price",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 223
                          },
                          "optional": false,
                          "computed": false,
                          "start": 213,
                          "end": 223
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 226,
                              "end": 230
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Price",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 231,
                              "end": 236
                            },
                            "optional": false,
                            "computed": false,
                            "start": 226,
                            "end": 236
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 239,
                            "end": 240
                          },
                          "start": 226,
                          "end": 240
                        },
                        "start": 213,
                        "end": 240
                      },
                      "directive": null,
                      "start": 213,
                      "end": 241
                    }
                  ],
                  "start": 181,
                  "end": 245
                },
                "expression": false,
                "start": 178,
                "end": 245
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 171,
              "end": 245
            }
          ],
          "start": 167,
          "end": 247
        },
        "abstract": false,
        "declare": false,
        "start": 151,
        "end": 247
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 144,
      "end": 247
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 247
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
    "value": "BaseProduct",
    "start": 13,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Price",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "Product",
    "start": 56,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "BaseProduct",
    "start": 72,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Compute",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Price",
    "start": 109,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Price",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 144,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "Annotated",
    "start": 157,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "Compute",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Price",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "Price",
    "start": 231,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 237,
    "end": 238
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  }
]
```
