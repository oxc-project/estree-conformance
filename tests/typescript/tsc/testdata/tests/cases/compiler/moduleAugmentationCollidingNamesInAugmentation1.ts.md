__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 27,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            },
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 59
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 69
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 69
            },
            "start": 44,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 74
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 74
        },
        "right": {
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
            "body": [],
            "start": 88,
            "end": 91
          },
          "expression": false,
          "start": 77,
          "end": 91
        },
        "start": 43,
        "end": 91
      },
      "directive": null,
      "start": 43,
      "end": 91
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 108,
        "end": 122
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 144
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 142,
                  "end": 144
                }
              ],
              "start": 141,
              "end": 145
            },
            "declare": false,
            "start": 129,
            "end": 145
          }
        ],
        "start": 123,
        "end": 147
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 93,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 9,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 27,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 49,
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
    "value": "prototype",
    "start": 60,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 93,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 101,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 108,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 129,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x0",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 27,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 45,
              "end": 48
            },
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Observable",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 59
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 69
              },
              "optional": false,
              "computed": false,
              "start": 49,
              "end": 69
            },
            "start": 44,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 71,
            "end": 74
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 74
        },
        "right": {
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
            "body": [],
            "start": 88,
            "end": 91
          },
          "expression": false,
          "start": 77,
          "end": 91
        },
        "start": 43,
        "end": 91
      },
      "directive": null,
      "start": 43,
      "end": 91
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 108,
        "end": 122
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 144
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 142,
                  "end": 144
                }
              ],
              "start": 141,
              "end": 145
            },
            "declare": false,
            "start": 129,
            "end": 145
          }
        ],
        "start": 123,
        "end": 147
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 93,
      "end": 147
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 9,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 27,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 49,
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
    "value": "prototype",
    "start": 60,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 93,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 101,
    "end": 107
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 108,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 129,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 142,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  }
]
```
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
          "name": "Observable",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 31
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 32,
              "end": 33
            }
          ],
          "start": 31,
          "end": 34
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
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 47
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pred",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 58
                                },
                                "typeArguments": null,
                                "start": 57,
                                "end": 58
                              },
                              "start": 56,
                              "end": 58
                            },
                            "start": 55,
                            "end": 58
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 63,
                            "end": 70
                          },
                          "start": 60,
                          "end": 70
                        },
                        "start": 54,
                        "end": 70
                      },
                      "start": 52,
                      "end": 70
                    },
                    "start": 48,
                    "end": 70
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Observable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 83
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 84,
                            "end": 85
                          },
                          "typeArguments": null,
                          "start": 84,
                          "end": 85
                        }
                      ],
                      "start": 83,
                      "end": 86
                    },
                    "start": 73,
                    "end": 86
                  },
                  "start": 71,
                  "end": 86
                },
                "body": null,
                "expression": false,
                "start": 47,
                "end": 87
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 41,
              "end": 87
            }
          ],
          "start": 35,
          "end": 89
        },
        "abstract": false,
        "declare": true,
        "start": 7,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 90
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 21,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "pred",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 63,
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
    "type": "Identifier",
    "value": "Observable",
    "start": 73,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Observable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 19
          },
          "importKind": "value",
          "start": 9,
          "end": 19
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./observable",
        "raw": "\"./observable\"",
        "start": 27,
        "end": 41
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 41
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./map1",
        "raw": "\"./map1\"",
        "start": 49,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 58
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./map2",
        "raw": "\"./map2\"",
        "start": 66,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 94
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 95,
                      "end": 101
                    }
                  ],
                  "start": 94,
                  "end": 102
                },
                "start": 84,
                "end": 102
              },
              "start": 82,
              "end": 102
            },
            "start": 81,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 102
        }
      ],
      "declare": false,
      "start": 77,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 9,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 22,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"./observable\"",
    "start": 27,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "String",
    "value": "\"./map1\"",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 59,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"./map2\"",
    "start": 66,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 84,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  }
]
```
