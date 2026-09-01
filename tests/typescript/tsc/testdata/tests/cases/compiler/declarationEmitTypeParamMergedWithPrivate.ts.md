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
          "name": "Test",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 17
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
                "start": 18,
                "end": 19
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 18,
              "end": 19
            }
          ],
          "start": 17,
          "end": 20
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 40
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 44,
                      "end": 45
                    },
                    "typeArguments": null,
                    "start": 44,
                    "end": 45
                  },
                  "start": 42,
                  "end": 45
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ThrowStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 62,
                        "end": 64
                      },
                      "start": 56,
                      "end": 65
                    }
                  ],
                  "start": 46,
                  "end": 71
                },
                "expression": false,
                "start": 40,
                "end": 71
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 27,
              "end": 71
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
                "start": 84,
                "end": 88
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 93
                    },
                    "typeArguments": null,
                    "start": 92,
                    "end": 93
                  },
                  "start": 90,
                  "end": 93
                },
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
                          "start": 111,
                          "end": 115
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 119,
                          "end": 122
                        },
                        "start": 111,
                        "end": 122
                      },
                      "start": 104,
                      "end": 123
                    }
                  ],
                  "start": 94,
                  "end": 129
                },
                "expression": false,
                "start": 88,
                "end": 129
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 77,
              "end": 129
            }
          ],
          "start": 21,
          "end": 131
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 131
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 131
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 131
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
    "value": "Test",
    "start": 13,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 27,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 35,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 56,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 62,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 104,
    "end": 110
  },
  {
    "type": "Null",
    "value": "null",
    "start": 111,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  }
]
```
