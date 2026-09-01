__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 23
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
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
                              "start": 44,
                              "end": 45
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 44,
                            "end": 45
                          }
                        ],
                        "start": 43,
                        "end": 46
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 52,
                        "end": 64
                      },
                      "id": null,
                      "generator": false,
                      "start": 43,
                      "end": 64
                    },
                    "start": 36,
                    "end": 64
                  }
                ],
                "start": 26,
                "end": 70
              },
              "expression": false,
              "start": 23,
              "end": 70
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 14,
            "end": 70
          }
        ],
        "start": 8,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  }
]
```
