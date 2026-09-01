__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
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
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 52
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 67,
                        "end": 68
                      },
                      "id": null,
                      "generator": false,
                      "start": 55,
                      "end": 68
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 44,
                    "end": 69
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 86
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": true,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 101,
                          "end": 105
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 107
                        },
                        "optional": false,
                        "computed": false,
                        "start": 101,
                        "end": 107
                      },
                      "id": null,
                      "generator": false,
                      "start": 89,
                      "end": 107
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 78,
                    "end": 108
                  }
                ],
                "start": 34,
                "end": 114
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 114
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 114
          }
        ],
        "start": 13,
        "end": 116
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 116
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 116
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Keyword",
    "value": "static",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 64,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 78,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 89,
    "end": 94
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
    "value": "=>",
    "start": 98,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  }
]
```
