__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Document",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 53
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "increment",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 69
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 73,
                "end": 77
              },
              "start": 71,
              "end": 77
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 60,
            "end": 78
          }
        ],
        "start": 54,
        "end": 80
      },
      "declare": false,
      "start": 35,
      "end": 80
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CustomDocument",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 159
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Document",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 176
          },
          "typeArguments": null,
          "start": 168,
          "end": 176
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 177,
        "end": 180
      },
      "declare": false,
      "start": 135,
      "end": 180
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 202
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 203,
                "end": 204
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CustomDocument",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 227
                },
                "typeArguments": null,
                "start": 213,
                "end": 227
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 203,
              "end": 227
            }
          ],
          "start": 202,
          "end": 228
        },
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
                "start": 235,
                "end": 246
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
                            "start": 306,
                            "end": 310
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 315
                          },
                          "optional": false,
                          "computed": false,
                          "start": 306,
                          "end": 315
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 316,
                                "end": 317
                              },
                              "typeArguments": null,
                              "start": 316,
                              "end": 317
                            }
                          ],
                          "start": 315,
                          "end": 318
                        },
                        "arguments": [],
                        "optional": false,
                        "start": 306,
                        "end": 320
                      },
                      "directive": null,
                      "start": 306,
                      "end": 321
                    }
                  ],
                  "start": 249,
                  "end": 327
                },
                "expression": false,
                "start": 246,
                "end": 327
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 235,
              "end": 327
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 344
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 345,
                        "end": 346
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Document",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 355,
                          "end": 363
                        },
                        "typeArguments": null,
                        "start": 355,
                        "end": 363
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 345,
                      "end": 363
                    }
                  ],
                  "start": 344,
                  "end": 364
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 367,
                  "end": 370
                },
                "expression": false,
                "start": 344,
                "end": 370
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 333,
              "end": 370
            }
          ],
          "start": 229,
          "end": 372
        },
        "abstract": false,
        "declare": false,
        "start": 189,
        "end": 372
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 182,
      "end": 372
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 35,
  "end": 372
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 35,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 45,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "increment",
    "start": 60,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 73,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 135,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "CustomDocument",
    "start": 145,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 160,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 182,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Example",
    "start": 195,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 205,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "CustomDocument",
    "start": 213,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 235,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 333,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 340,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Z",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 347,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 355,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  }
]
```
