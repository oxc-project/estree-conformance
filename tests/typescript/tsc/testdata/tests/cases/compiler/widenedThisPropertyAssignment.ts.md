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
          "name": "CC",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 75
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 93
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
                            "start": 106,
                            "end": 110
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stuffs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 111,
                            "end": 117
                          },
                          "optional": false,
                          "computed": false,
                          "start": 106,
                          "end": 117
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 120,
                          "end": 122
                        },
                        "start": 106,
                        "end": 122
                      },
                      "directive": null,
                      "start": 106,
                      "end": 122
                    }
                  ],
                  "start": 96,
                  "end": 128
                },
                "expression": false,
                "start": 93,
                "end": 128
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 82,
              "end": 128
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "addStuffs",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 188
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
                    "name": "stuffs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 195
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
                            "start": 207,
                            "end": 211
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stuffs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 212,
                            "end": 218
                          },
                          "optional": false,
                          "computed": false,
                          "start": 207,
                          "end": 218
                        },
                        "right": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "stuffs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 226,
                                "end": 232
                              },
                              "start": 223,
                              "end": 232
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 237,
                                  "end": 241
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "stuffs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 242,
                                  "end": 248
                                },
                                "optional": false,
                                "computed": false,
                                "start": 237,
                                "end": 248
                              },
                              "start": 234,
                              "end": 248
                            }
                          ],
                          "start": 221,
                          "end": 250
                        },
                        "start": 207,
                        "end": 250
                      },
                      "directive": null,
                      "start": 207,
                      "end": 250
                    }
                  ],
                  "start": 197,
                  "end": 256
                },
                "expression": false,
                "start": 188,
                "end": 256
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 179,
              "end": 256
            }
          ],
          "start": 76,
          "end": 258
        },
        "abstract": false,
        "declare": false,
        "start": 67,
        "end": 258
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 60,
      "end": 258
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 258
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 67,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "CC",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 82,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 106,
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
    "value": "stuffs",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "addStuffs",
    "start": 179,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "stuffs",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "stuffs",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "stuffs",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 234,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "stuffs",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  }
]
```
