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
          "name": "Outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Table",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 24
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 19,
              "end": 24
            }
          ],
          "start": 18,
          "end": 25
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
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 38
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
                        "name": "Table",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 39,
                        "end": 44
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 39,
                      "end": 44
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 47
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 46,
                      "end": 47
                    }
                  ],
                  "start": 38,
                  "end": 48
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 52,
                          "end": 53
                        },
                        "typeArguments": null,
                        "start": 52,
                        "end": 53
                      },
                      "start": 50,
                      "end": 53
                    },
                    "start": 49,
                    "end": 53
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 72,
                          "end": 76
                        },
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Table",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 80,
                                "end": 85
                              },
                              "typeArguments": null,
                              "start": 80,
                              "end": 85
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 88,
                              "end": 92
                            }
                          ],
                          "start": 80,
                          "end": 92
                        },
                        "start": 72,
                        "end": 92
                      },
                      "start": 65,
                      "end": 93
                    }
                  ],
                  "start": 55,
                  "end": 99
                },
                "expression": false,
                "start": 38,
                "end": 99
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 32,
              "end": 99
            }
          ],
          "start": 26,
          "end": 101
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
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
    "value": "Outer",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 65,
    "end": 71
  },
  {
    "type": "Null",
    "value": "null",
    "start": 72,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 77,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "Table",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 86,
    "end": 87
  },
  {
    "type": "Null",
    "value": "null",
    "start": 88,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  }
]
```
