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
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportMeta",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 37
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 39,
                    "end": 42
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 51,
                          "end": 55
                        },
                        "start": 48,
                        "end": 55
                      },
                      "start": 45,
                      "end": 55
                    },
                    "start": 43,
                    "end": 55
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 39,
                  "end": 55
                }
              ],
              "start": 38,
              "end": 56
            },
            "declare": false,
            "start": 17,
            "end": 56
          }
        ],
        "start": 15,
        "end": 58
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 58
    },
    {
      "type": "EmptyStatement",
      "start": 58,
      "end": 59
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "MetaProperty",
          "meta": {
            "type": "Identifier",
            "decorators": [],
            "name": "import",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 71
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "meta",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 76
          },
          "start": 65,
          "end": 76
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 80
        },
        "optional": false,
        "computed": false,
        "start": 65,
        "end": 80
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MetaProperty",
                  "meta": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "import",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 92
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 97
                  },
                  "start": 86,
                  "end": 97
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 101
                },
                "optional": false,
                "computed": false,
                "start": 86,
                "end": 101
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 86,
              "end": 103
            },
            "directive": null,
            "start": 86,
            "end": 104
          }
        ],
        "start": 82,
        "end": 106
      },
      "alternate": null,
      "start": 61,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 17,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "ImportMeta",
    "start": 27,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 48,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 72,
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
    "value": "foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 98,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  }
]
```
